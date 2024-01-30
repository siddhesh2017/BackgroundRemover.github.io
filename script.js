let imgURL;
function handleUpload()
{
    const inputFile = document.getElementById('ipFile');
    const img = inputFile.files[0];

    const imgData = new FormData();
    imgData.append("image_file",img);
    imgData.append("size", 'auto');

    const apiKey = '79P5tbn3DUU1MaFthmDJytrb';
    fetch(
        'https://api.remove.bg/v1.0/removebg',
        {
            method:'POST',
            headers:{
                'X-Api-Key': apiKey
            },
            body:imgData,
        }
    )
    .then(function(response){
        return response.blob();
    })
    .then(function(blob){
        console.log(blob);

        const imgUrl = URL.createObjectURL(blob);
        const blobImg = document.createElement('img');
        blobImg.src = imgUrl;
        blobImg.style.background = 'rgb(1,1,1,0.5)';
        blobImg.style.borderBottomLeftRadius = "20px";
        blobImg.style.borderBottomRightRadius = "20px";
        blobImg.style.borderTopLeftRadius = "20px";
        blobImg.style.borderTopRightRadius = "20px";
        imgURL = imgUrl
        document.body.appendChild(blobImg);
        const secondCol = document.querySelector('.col-md-6:nth-child(2)');
        secondCol.appendChild(blobImg);
    })
    .catch();
}

function downloadFile(){
    var imgDownload = document.createElement('a');
    imgDownload.href = imgURL;
    imgDownload.download = 'sid-bg.png';
    document.body.appendChild(imgDownload);
    imgDownload.click();
    document.body.removeChild(a)
}