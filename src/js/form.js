function displayFileName() {
    var fileInput = document.getElementById('resume');
    var fileNameInfo = document.getElementById('file-name-info');
    var fileNameDisplay = document.getElementById('file-name');

    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
        fileNameInfo.style.display = 'block';
    } else {
        fileNameInfo.style.display = 'none';
    }
}
