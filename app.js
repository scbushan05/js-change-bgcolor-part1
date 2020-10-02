//const colors = ['red', 'yellow', 'black', 'blue', 'silver', 'gold', 'purple', 'orange', 'lightblue', 'skyblue', 'darkblue', 'brown']
const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", 
                "#808000", "#00FF00", "#008000", "#00FFFF", "#008080", "#0000FF", "#000080", 
                "#FF00FF", "#800080", "#FF00FF", "#800080"];
//const button = document.querySelector('.button');
const button = document.getElementById('changecolor');
button.addEventListener('click', () => {
    changeBackgroundColor();
})

const changeBackgroundColor = () => {
    const randomNumber = Math.floor((Math.random() * colors.length - 1) + 1);
    document.body.style.background = colors[randomNumber];
}