

// test = document.querySelector(".test");
main_page = document.querySelector(".main");
start_box = document.querySelectorAll(".start_box.appear");
rock = document.getElementById("rock");
// test = document.getElementsByClassName("test");
// test.style.display = 'none';

start_box.forEach((box, idx) => {
    box.addEventListener("click", () => {
        start_box.forEach((box, j) => {
            box.classList.add("disappear");
        });
        document.querySelector(".start_zone").classList.add("off");
        // document.getElementById("start_zone").style.display = 'none';
        main_page.classList.remove("off");
    });
});

const colors = ["#63957f","#b6a59d","#e5f0ec","#98e79d","#387af3","#b796fb","#ed72bb","#e59457","#626ba3","#2770bd"];
rock.addEventListener("mouseover", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    rock.style.color = randomColor;
});

rock.addEventListener("click", () => {
    rock.classList.toggle("on");
});

guitar = document.getElementById("guitar");
guitar.addEventListener("click", () => {
    alert("기타 영상은 없습니다 😥");
});

nowords = document.querySelector(".nowords");
nowords.addEventListener("click", () => {
    nowords.innerText = "(더 적고 싶었지만 아무리 머리를 쥐어짜내도 나오지 않았습니다....)";
    nowords.style.opacity = '0.7';
});


hobby_btn = document.querySelector(".hobby_btn");
skill_btn = document.querySelector(".skill_btn");
interest_btn = document.querySelector(".interest_btn");
hobby = document.querySelector(".hobby");
skill = document.querySelector(".skill");
interest = document.querySelector(".interest");

hobby_btn.addEventListener("click", () => {
    if(!(hobby.classList.contains("off"))) {
        hobby.classList.toggle("off");
    }
    else {
        hobby.classList.toggle("off");
        skill.classList.add("off");
        interest.classList.add("off");
    }
});
skill_btn.addEventListener("click", () => {
    if(!(skill.classList.contains("off"))) {
        skill.classList.toggle("off");
    }
    else {
        hobby.classList.add("off");
        skill.classList.toggle("off");
        interest.classList.add("off");
    }
});
interest_btn.addEventListener("click", () => {
    if(!(interest.classList.contains("off"))) {
        interest.classList.toggle("off");
    }
    else {
        hobby.classList.add("off");
        skill.classList.add("off");
        interest.classList.toggle("off");
    }
});