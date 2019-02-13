const arr = ['_0_0','_0_1','_0_2','_0_3','_1_0','_1_1','_1_2','_1_3','_2_0','_2_1','_2_2','_2_3','_3_0','_3_1','_3_2','_3_3'];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}   

shuffleArray(arr);

let imageBlock = document.querySelector('.images');

for(let i = 0; i < arr.length; i++){
    let img = document.createElement('img');
    img.id = "slice" + arr[i];
    img.draggable = true;
    img.src = "images/slice" + arr[i] + ".jpg";
    imageBlock.appendChild(img);
}

document.addEventListener("drop", function( event ) {
    console.log(document.querySelector('.images').childNodes.length);
    event.preventDefault();
    if((document.querySelector('.images').childNodes.length) == 0){      
        document.querySelectorAll('.col').forEach(el=>{el.style.border = 'none'});
        let div = document.createElement('div');
        div.id = "message";
        div.innerHTML = `
        <h1>Dear WIFE!</h1>
        <p>Happy Valentine’s Day!</p>
        <p>Be my loved one, be my Valentine!</p>
        <p>Be my Valentine for the rest of my life.</p>
        <p>You are and always will be my Valentine.</p>
        <p>You are my true love, and you will always be my Valentine.</p>
        <p>I love loving you. Happy Valentine’s day! Your BUSIA</p>`;
        document.querySelector('.images').appendChild(div);      
    }
});