
    let count1 = 0;
    let count2 = 0;
    let btn = document.getElementById("btn");
    let btn2 = document.getElementById("btn2")

    // var disp = document.getElementById("display");
    // btn.onclick = function ()
    // {
    //     count1++;
    //     // disp.innerHTML = count;
    //     document.getElementById("myDIV").style.backgroundImage = `url(background${count1 % 5}.jpg)`;
    // }

    btn.onclick = function ()
    {
        const myInterval = setInterval(setImage, 3000);
        setImage()
    }

    function setImage()
    {
        count1++;
        document.getElementById("myDIV").style.backgroundImage = `url(background${count1 % 5}.jpg)`;
    }

    btn2.onclick = function ()
    {
        count2++;
        let linkElements = document.getElementsByTagName('a');

        for (let i = 0; i < linkElements.length; i++)
        {
            if(count2 % 2)
            {
                linkElements[i].style.color = 'navy';
                linkElements[i].style.backgroundColor = 'orange';
                linkElements[i].style.font='italic 15px arial,serif';
            }
            else
            {
                linkElements[i].style.color = 'orange';
                linkElements[i].style.backgroundColor = 'navy';
                linkElements[i].style.font='italic bold 20px arial,serif';
            }
        }
    }
