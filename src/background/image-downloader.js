class ImageDownloader {
  // Download multiple images
  static async downloadImages({ images, folder = 'panda-images' }) {
    if (!images || images.length === 0) {
      return;
    }

    // Sanitize folder name
    const sanitizeFilename = (name) => {
      return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    };

    // Download batch of images
    const downloadBatch = (imageUrls) => {
      const timestamp = Date.now();
      
      imageUrls.forEach((url, index) => {
        // Extract file extension
        let extension = url.split('.').pop().split(/[#?]/)[0];
        
        // Validate extension
        if (!extension || extension.length > 5) {
          extension = 'png';
        }
        
        // Create filename
        const sanitizedFolder = sanitizeFilename(folder);
        const filename = `${sanitizedFolder}/${timestamp}_${index}.${extension}`;
        
        // Download image
        chrome.downloads.download({
          url: url,
          filename: filename,
          saveAs: false
        }, (downloadId) => {
          if (chrome.runtime.lastError) {
            console.error(`Error downloading ${url}:`, chrome.runtime.lastError);
          }
        });
      });
    };

    // Process images in batches
    const batchSize = 10;
    const processBatches = async () => {
      for (let i = 0; i < images.length; i += batchSize) {
        const batch = images.slice(i, i + batchSize);
        downloadBatch(batch);
        
        // Wait between batches to avoid overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };

    await processBatches();
  }

  // Download single image
  static async downloadImage({ url, filename }) {
    return new Promise((resolve, reject) => {
      chrome.downloads.download({
        url: url,
        filename: filename,
        saveAs: false
      }, (downloadId) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(downloadId);
        }
      });
    });
  }

  // Monitor download progress
  static monitorDownload(downloadId) {
    return new Promise((resolve, reject) => {
      const checkDownload = () => {
        chrome.downloads.search({ id: downloadId }, (downloads) => {
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
            // Check again after a delay
            setTimeout(checkDownload, 100);
          }
        });
      };

      checkDownload();
    });
  }

  // Get download history
  static async getDownloadHistory(query = {}) {
    return new Promise((resolve) => {
      chrome.downloads.search(query, (downloads) => {
        resolve(downloads);
      });
    });
  }

  // Clear download history
  static async clearDownloadHistory() {
    const downloads = await this.getDownloadHistory();
    
    downloads.forEach(download => {
      chrome.downloads.erase({ id: download.id });
    });
  }

  // Pause download
  static async pauseDownload(downloadId) {
    return new Promise((resolve, reject) => {
      chrome.downloads.pause(downloadId, () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  // Resume download
  static async resumeDownload(downloadId) {
    return new Promise((resolve, reject) => {
      chrome.downloads.resume(downloadId, () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  // Cancel download
  static async cancelDownload(downloadId) {
    return new Promise((resolve, reject) => {
      chrome.downloads.cancel(downloadId, () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  // Open downloaded file
  static async openDownload(downloadId) {
    return new Promise((resolve, reject) => {
      chrome.downloads.open(downloadId, () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }

  // Show download in folder
  static showDownloadInFolder(downloadId) {
    chrome.downloads.show(downloadId);
  }

  // Accept danger and download
  static async acceptDanger(downloadId) {
    return new Promise((resolve, reject) => {
      chrome.downloads.acceptDanger(downloadId, () => {
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