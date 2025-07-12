function dropdown(){
    let storedropdown = document.getElementById('dropcontent');
    if(storedropdown.style.display != 'block'){
        storedropdown.style.display = 'block';
    }else{
        storedropdown.style.display = 'none';
    }
}

function submit(){
    if(document.getElementById('email').value == ''){
        document.getElementById('email').classList.add('emailer');
        document.getElementById('email').value = 'Fill this field...';
        setTimeout(function (){
            document.getElementById('email').classList.remove('emailer');
            document.getElementById('email').value = '';
        }, 2000);
    }else{
        document.getElementById('subsuccess').style.display = 'flex';
        document.getElementById('email').value = '';
        setTimeout(function (){
            document.getElementById('subsuccess').style.display = 'none';
        },2000)
    }
}

function openNav(){
    document.getElementById('sidebar').style.width = '250px';
}

function closeNav(){
    document.getElementById('sidebar').style.width = '0';
}

function sideDrop(){
    let sidedropdown = document.getElementById('sidedropcontent');
    if(sidedropdown.style.display != 'block'){
        sidedropdown.style.display = 'block';
    }else{
        sidedropdown.style.display = 'none';
    }
}


function lanibubu(){
    location.href = 'lanibubu.html';
}

function consult(){
    location.href = 'https://wa.link/zcel8a';
}