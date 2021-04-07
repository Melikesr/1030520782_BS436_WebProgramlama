const  React= require('react');
const {mount}=require('enzyme');
const {Game}=require('../src/client/Game');


test ('kart seçimi', ()=>{

const driver=mount(<Game/>);


    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card.find("img").prop("src");
    let srcName=card.image;


})

test('oyun sonucu',()=>{

    const driver=mount(<Game/>);

    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(1);
    card.simulate('click');
    card = driver.find('.kart').at(2);


})

test('yeni oyun',()=>{

    const driver=mount(<Game/>);

    let cart=driver.find('.kart').at(0);
    cart.simulate('click');
    expect(cart === 'img/Kedi.jpg');
    let oyun =driver.find('.link');



})

test('iki kart secimi ve yeniden baslatma',()=>{
    const driver = mount(<Game/>);

    for(let i = 0; i<20;i++){
        let card = driver.find('.kart').at(0);
        card.simulate('click');

        card = driver.find('.kart').at(0);
        let secondSelected = Math.floor(Math.random()*2)
        let srcName = card.find("img").prop("src");
        if(srcName==='img/Kopek.jpg'){
            card = driver.find('.kart').at(secondSelected+1);
            card.simulate('click');

            card = driver.find('.kart').at(secondSelected+1);
            srcName = card.find("img").prop("src")
            expect(srcName === 'img/Kedi.jpg' || srcName === 'img/Kopek.jpg').toBeTruthy();

        }

    }

})

test('tek kart secimi',()=>{
    const driver = mount(<Game/>);

    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg' || srcName === 'img/Kopek.jpg').toBeTruthy();
})

test('kart sayısı',()=>{
    const driver = mount(<Game/>);

    const cards = driver.find('.kart')
    expect(cards.length).toBe(3);
})


