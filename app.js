let tab_links=document.getElementsByClassName('tab-links')
let tab_contents=document.getElementsByClassName('tab-contents')


function opentab(tabname){


    for (let tab_link of tab_links) {
        tab_link.classList.remove('active-link')
    }


    for (let tab_content of tab_contents) {
        tab_content.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu=document.getElementsByClassName('sidemenu')[0]


function openmenu(){
    sidemenu.style.right='0'
    console.log('hello');
}

function closemenu(){
    console.log('hi');
    sidemenu.style.right='-200px'
}