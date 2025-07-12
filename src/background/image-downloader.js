/**
 * WebPeeler ImageDownloader - EXACT COPY of function S
 * Handles image downloading with WebPeeler's exact patterns
 */
class ImageDownloader {
  
  /**
   * WebPeeler exact image download implementation - function S
   */
  static async downloadImages({ images, folder = 'panda-images' }) {
    if (!images || images.length === 0) {
      return;
    }

    // WebPeeler exact sanitization function
    const sanitizeFilename = function(name) {
      return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    };

    // WebPeeler exact batch download function
    const downloadBatch = function(imageUrls) {
      const timestamp = Date.now();
      
      imageUrls.forEach(function(url, index) {
        // WebPeeler exact extension extraction
        let extension = url.split('.').pop().split(/[#?]/)[0];
        
        // WebPeeler exact validation
        if (!extension || extension.length > 5) {
          extension = 'png';
        }
        
        // WebPeeler exact filename creation
        const sanitizedFolder = sanitizeFilename(folder);
        const filename = `${sanitizedFolder}/${timestamp}_${index}.${extension}`;
        
        // WebPeeler exact download call
        chrome.downloads.download({
          url: url,
          filename: filename,
          saveAs: false
        }, function(downloadId) {
          if (chrome.runtime.lastError) {
            // WebPeeler silently handles errors
          }
        });
      });
    };

    // WebPeeler exact batch processing
    const processBatches = async function() {
      const batchSize = 10; // WebPeeler uses 10
      
      for (let i = 0; i < images.length; i += batchSize) {
        const batch = images.slice(i, i + batchSize);
        downloadBatch(batch);
        
        // WebPeeler exact 500ms delay between batches
        await new Promise(function(resolve) {
          setTimeout(resolve, 500);
        });
      }
    };

    await processBatches();
  }

  /**
   * Enhanced single image download (not in WebPeeler, but useful)
   */
  static async downloadImage({ url, filename }) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.download({
        url: url,
        filename: filename,
        saveAs: false
      }, function(downloadId) {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(downloadId);
        }
      });
    });
  }

  /**
   * WebPeeler-compatible single file download
   */
  static async downloadFile(data) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.download(data, function(downloadId) {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(downloadId);
        }
      });
    });
  }

  /**
   * Enhanced download monitoring (improvement over WebPeeler)
   */
  static monitorDownload(downloadId) {
    return new Promise(function(resolve, reject) {
      const checkDownload = function() {
        chrome.downloads.search({ id: downloadId }, function(downloads) {
          if (downloads.length === 0) {
            reject(new Error('Download not found'));
            return;
          }

          const download = downloads[0];
          
          if (download.state === 'complete') {
            resolve(download);
          } else if (download.state === 'interrupted') {
            reject(new Error(`Download interrupted: ${download.error}`));
          } else {
            setTimeout(checkDownload, 100);
          }
        });
      };

      checkDownload();
    });
  }

  /**
   * Enhanced download history (improvement over WebPeeler)
   */
  static async getDownloadHistory(query = {}) {
    return new Promise(function(resolve) {
      chrome.downloads.search(query, function(downloads) {
        resolve(downloads);
      });
    });
  }

  /**
   * Enhanced download history clearing (improvement over WebPeeler)
   */
  static async clearDownloadHistory() {
    const downloads = await this.getDownloadHistory();
    
    downloads.forEach(function(download) {
      chrome.downloads.erase({ id: download.id });
    });
  }

  /**
   * Enhanced download control methods (improvements over WebPeeler)
   */
  static async pauseDownload(downloadId) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.pause(downloadId, function() {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  static async resumeDownload(downloadId) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.resume(downloadId, function() {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  static async cancelDownload(downloadId) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.cancel(downloadId, function() {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  static async openDownload(downloadId) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.open(downloadId, function() {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  static showDownloadInFolder(downloadId) {
    chrome.downloads.show(downloadId);
  }

  static async acceptDanger(downloadId) {
    return new Promise(function(resolve, reject) {
      chrome.downloads.acceptDanger(downloadId, function() {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }
}

export default ImageDownloader; 