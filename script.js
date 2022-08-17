import formatFileName from "./utils/file-name-formatter.js";

console.log(formatFileName('out of stock'));

const itemsContainer = document.querySelector('.items-container');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json');

xhr.onload = function(){
    if(xhr.status === 200){
        const response = xhr.responseText;

        const items = JSON.parse(response).items;

        let appendHTML = '';

        items.forEach(item => {

            const rawItemHTML = `
                <div class="item ${formatFileName(item.status)} p-2" style="position: relative;">
                    <div class="img center" style="height: 60%;">
                        <img class="w-75" style="object-fit: cover; height: 100%; max-width: 200px;" src="./img/${item.img}.png" />
                    </div>
                    <div class="description" style="height: 40%;">
                        <div class="text-uppercase border-bottom light mt-1 pb-2">
                            <h3 style="font-size: 1.1rem; margin-bottom: 5px;">${item.name}</h3>
                            <p style="color: #999; font-size: .8rem;">Soldos</p>
                        </div>
                        <div class="pt-2">
                            <p style="font-weight: bold;">€${item.price}</p>
                        </div>
                    </div>
                    <div class="add p-2">
                        <i class="fa-solid fa-circle-plus"></i>
                    </div>
                    <div class="tag">
                        <p>${item.status !== 'normal' ? item.status.toUpperCase() : ''}</p>
                    </div>
                </div>
            `;

            appendHTML += rawItemHTML;

        });

        itemsContainer.innerHTML = appendHTML;
    }
    else 
        console.log('bad request...');
}

xhr.send();


function replaceSpaceToMinusChar(idx, str) {
    str[idx] = '-';
    return str;
}