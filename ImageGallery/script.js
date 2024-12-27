const enlargedImgBox = document.querySelector('#enlarged-imgBox')
const enlargedImg = document.querySelector('#enlarged-img')
const imgCaption = document.querySelector('.img-text')

function enlargeImage(newImg){
    enlargedImgBox.style.display = "flex"
    enlargedImg.src=newImg.src
    imgCaption.textContent = newImg.alt
}

function closeImgBox(event) {
  enlargedImgBox.style.display="none"
}
const images = document.querySelectorAll('.thumbnail-image')
images.forEach(img=>{
    img.addEventListener('click', ()=>{
        enlargeImage(img)
    })
})

const closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click',closeImgBox)