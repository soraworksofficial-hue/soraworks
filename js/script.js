// ==========ローディング画面読み込み=================

const loading=document.querySelector('#loading');

window.addEventListener('load',()=>{
    // ローディングが終わった時の処理
    loading.classList.add('loaded');
})

//============ 開閉ボタンをクリックした時のイベント=============
const menuOpen=document.querySelector('#menu-open');
const menuClose=document.querySelector('#menu-close');
const menuPanel=document.querySelector('#menu-panel');
const menuItems=document.querySelectorAll('#menu-panel li');
const menuOptions={
    duration:1400,
    easing:'ease',
    fill:'forwards',
}

// メニューを開く
menuOpen.addEventListener('click',()=>{
    
    menuPanel.animate({translate:['100vw',0]},menuOptions);

    //ハンバーガーメニューを非表示にする ★★★
    menuOpen.style.opacity = '0';
    menuOpen.style.visibility = 'hidden';


    // メニューをひとつずつ順に表示
menuItems.forEach((menuItem,index)=>{
    // console.log(`${index}番目のリスト`);
    menuItem.animate({
        opacity:[0,1],
        translate:['2rem',0],
        
    },
{
    duration:2400,
    delay:300 *index,
    easing:'ease',
    fill:'forwards',
})
});
});



// メニューを閉じる
menuClose.addEventListener('click',()=>{
    menuPanel.animate({translate:[0,'100vw']},menuOptions);
    // ハンバーガーメニューを再表示する ★★★
    menuOpen.style.opacity = '1';
    menuOpen.style.visibility = 'visible';
    // ... リストを閉じるアニメーション ...
    menuItems.forEach((menuItem)=>{
        menuItem.animate({opacity:[1,0]},menuOptions)
    })
})

