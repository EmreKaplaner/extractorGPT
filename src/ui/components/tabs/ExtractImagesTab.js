import React, { useState } from 'react';
import { LoadingSpinner } from '../common/LoadingSpinner';

export function ExtractImagesTab({ isPro }) {
  const [foundImages, setFoundImages] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedImages, setSelectedImages] = useState(new Set());
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  
  const handleScanImages = () => {
    setIsScanning(true);
    setFoundImages([]);
    setSelectedImages(new Set());
    
    // Find all images on the page
    const imageSet = new Set();
    const images = [];
    
    // Get all img elements
    document.querySelectorAll('img').forEach(img => {
      if (img.src && !imageSet.has(img.src)) {
        imageSet.add(img.src);
        images.push({
          src: img.src,
          width: img.naturalWidth || img.width || 0,
          height: img.naturalHeight || img.height || 0,
          alt: img.alt || '',
          title: img.title || '',
          id: img.src
        });
      }
    });
    
    // Get background images
    document.querySelectorAll('*').forEach(element => {
      const bgImage = window.getComputedStyle(element).backgroundImage;
      if (bgImage && bgImage !== 'none' && bgImage.startsWith('url(')) {
        const url = bgImage.slice(4, -1).replace(/["']/g, '');
        if (url && !imageSet.has(url)) {
          imageSet.add(url);
          images.push({
            src: url,
            width: element.offsetWidth || 0,
            height: element.offsetHeight || 0,
            alt: '',
            title: '',
            id: url
          });
        }
      }
    });
    
    // Get images from picture elements
    document.querySelectorAll('picture source').forEach(source => {
      const srcset = source.srcset;
      if (srcset) {
        // Parse srcset to get URLs
        const urls = srcset.split(',').map(s => s.trim().split(' ')[0]);
        urls.forEach(url => {
          if (url && !imageSet.has(url)) {
            imageSet.add(url);
            images.push({
              src: url,
              width: 0,
              height: 0,
              alt: '',
              title: '',
              id: url
            });
          }
        });
      }
    });
    
    // Filter out small images and data URLs
    const filteredImages = images.filter(img => {
      // Skip data URLs
      if (img.src.startsWith('data:')) return false;
      
      // Skip very small images (likely icons)
      if (img.width > 0 && img.height > 0 && (img.width < 50 || img.height < 50)) {
        return false;
      }
      
      return true;
    });
    
    setFoundImages(filteredImages);
    setIsScanning(false);
  };
  
  const handleToggleImage = (imageId) => {
    const newSelected = new Set(selectedImages);
    if (newSelected.has(imageId)) {
      newSelected.delete(imageId);
    } else {
      newSelected.add(imageId);
    }
    setSelectedImages(newSelected);
  };
  
  const handleSelectAll = () => {
    if (selectedImages.size === foundImages.length) {
      setSelectedImages(new Set());
    } else {
      setSelectedImages(new Set(foundImages.map(img => img.id)));
    }
  };
  
  const handleDownloadSelected = async () => {
    if (selectedImages.size === 0) return;
    
    if (!isPro) {
      alert('Downloading images is a PRO feature');
      return;
    }
    
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const selectedImageUrls = Array.from(selectedImages).map(id => {
      const img = foundImages.find(i => i.id === id);
      return img ? img.src : null;
    }).filter(Boolean);
    
    try {
      // Send message to background script to download images
      chrome.runtime.sendMessage({
        action: 'download-images',
        images: selectedImageUrls,
        folder: `extractor-gpt-images-${Date.now()}`
      }, (response) => {
        if (response && response.success) {
          console.log('Images download initiated');
        } else if (response && response.error) {
          console.error('Download error:', response.error);
          alert('Failed to download images: ' + response.error);
        }
        setIsDownloading(false);
        setDownloadProgress(0);
      });
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download images');
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };
  
  return (
    <div style={{ fontSize: '11px' }}>
      {/* Header */}
      <div style={{
        marginBottom: '14px'
      }}>
        <h2 style={{
          fontSize: '13px',
          fontWeight: '500',
          marginBottom: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          Download Images
          {!isPro && (
            <span style={{
              fontSize: '9px',
              padding: '1px 4px',
              backgroundColor: '#fbbf24',
              color: '#000',
              borderRadius: '2px',
              fontWeight: '600'
            }}>
              PRO
            </span>
          )}
        </h2>
        <p style={{
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '11px',
          margin: 0
        }}>
          {isPro 
            ? 'Find and download images from the current page'
            : 'Find images from the current page (PRO for download)'
          }
        </p>
      </div>

      {/* Status Bar */}
      <div style={{
        padding: '8px 10px',
        backgroundColor: 'rgba(124, 58, 237, 0.05)',
        border: '1px solid rgba(124, 58, 237, 0.15)',
        borderRadius: '4px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)' }}>
          {foundImages.length > 0 
            ? `Found ${foundImages.length} images`
            : 'No images found yet'
          }
          {selectedImages.size > 0 && ` (${selectedImages.size} selected)`}
        </span>
        {foundImages.length > 0 && (
          <span style={{
            fontSize: '10px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            Click images to select
          </span>
        )}
      </div>
      
      {/* Scan Button */}
      <button
        onClick={handleScanImages}
        disabled={isScanning}
        style={{
          width: '100%',
          padding: '8px',
          backgroundColor: '#7c3aed',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: isScanning ? 'not-allowed' : 'pointer',
          marginBottom: '12px',
          opacity: isScanning ? 0.7 : 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        {isScanning ? (
          <>
            <LoadingSpinner size="small" />
            Scanning...
          </>
        ) : (
          '🔍 Scan Page for Images'
        )}
      </button>
      
      {/* Action Buttons */}
      {foundImages.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          <button
            onClick={handleSelectAll}
            style={{
              flex: 1,
              padding: '6px 8px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '11px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            {selectedImages.size === foundImages.length ? '⬜ Deselect All' : '☑️ Select All'}
          </button>
          
          {selectedImages.size > 0 && (
            <button
              onClick={handleDownloadSelected}
              disabled={isDownloading || !isPro}
              style={{
                flex: 1,
                padding: '6px 8px',
                backgroundColor: isPro ? '#7c3aed' : 'rgba(255, 255, 255, 0.1)',
                color: isPro ? 'white' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                borderRadius: '3px',
                fontSize: '11px',
                fontWeight: '500',
                cursor: isDownloading || !isPro ? 'not-allowed' : 'pointer',
                opacity: isDownloading || !isPro ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              {isDownloading ? (
                <>
                  <LoadingSpinner size="small" />
                  Downloading...
                </>
              ) : (
                <>
                  📥 Download {selectedImages.size} Image{selectedImages.size !== 1 ? 's' : ''}
                  {!isPro && <span style={{
                    fontSize: '9px',
                    padding: '0px 3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    marginLeft: '2px'
                  }}>PRO</span>}
                </>
              )}
            </button>
          )}
        </div>
      )}
      
      {/* Download Progress */}
      {isDownloading && (
        <div style={{
          marginBottom: '12px',
          padding: '8px',
          backgroundColor: 'rgba(124, 58, 237, 0.05)',
          borderRadius: '3px',
          border: '1px solid rgba(124, 58, 237, 0.15)'
        }}>
          <div style={{
            fontSize: '11px',
            marginBottom: '6px',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            Downloading images...
          </div>
          <div style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${downloadProgress}%`,
              height: '100%',
              backgroundColor: '#7c3aed',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      )}
      
      {/* Image Gallery */}
      {foundImages.length > 0 && (
        <div>
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '12px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Image Gallery
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '8px',
            maxHeight: '300px',
            overflowY: 'auto',
            padding: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {foundImages.map((img, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: selectedImages.has(img.id) ? 'rgba(124, 58, 237, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                  border: selectedImages.has(img.id) ? '2px solid rgba(124, 58, 237, 0.6)' : '2px solid transparent',
                  borderRadius: '4px',
                  padding: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
                onClick={() => handleToggleImage(img.id)}
                onMouseEnter={(e) => {
                  if (!selectedImages.has(img.id)) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selectedImages.has(img.id)) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  }
                }}
              >
                <div style={{
                  position: 'relative',
                  paddingBottom: '75%', // 4:3 aspect ratio
                  overflow: 'hidden',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}>
                  <img 
                    src={img.src} 
                    alt={img.alt || `Image ${index + 1}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: rgba(255, 255, 255, 0.4); font-size: 9px;">Failed to load</div>';
                    }}
                  />
                  {selectedImages.has(img.id) && (
                    <div style={{
                      position: 'absolute',
                      top: '3px',
                      right: '3px',
                      backgroundColor: '#7c3aed',
                      color: 'white',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
                    }}>
                      ✓
                    </div>
                  )}
                </div>
                {img.width > 0 && img.height > 0 && (
                  <div style={{
                    fontSize: '9px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginTop: '3px',
                    textAlign: 'center'
                  }}>
                    {img.width}×{img.height}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {foundImages.length === 0 && !isScanning && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: 'rgba(255, 255, 255, 0.4)'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '12px', opacity: 0.3 }}>🖼️</div>
          <p style={{ fontSize: '12px', marginBottom: '6px', color: 'rgba(255, 255, 255, 0.5)' }}>No images found yet</p>
          <p style={{ fontSize: '11px' }}>Click "Scan Page" to find all images on this page</p>
        </div>
      )}
    </div>
  );
}

export default ExtractImagesTab; 