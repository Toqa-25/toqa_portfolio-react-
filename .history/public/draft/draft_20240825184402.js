.skills{
    display: flex;
    gap: 15px;
    flex-wrap:wrap;
    font-size: 20px;
    text-transform: uppercase;
}
.skill{
    position: relative;
    background: linear-gradient(90deg, rgba(253, 29, 191, 1) 50%, #eee 100%);
    background: #000;
    background-clip: text;
    --webkit-background-clip: text;
    color: transparent;
    font-size: 20px;
    text-transform: uppercase;
    width: fit-content;
    padding:3px;
    /* flex: 1; */
}

.skill:before{
    content: attr(data-text);
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width:0%;
    background: linear-gradient(90deg, rgba(253, 29, 191, 1) 50%, #eee 100%);
    background-clip: text;
    --webkit-background-clip: text;
    color: transparent;
    animation:animate-skill     1 ;
    -webkit-animation:animate-skill     1 ;
}
@keyframes animate-skill{
    to{
       width:100%;
    } 
} 
 @keyframes animate-html{
    0% {
        width:0%;
}
    50% {
        width:100%;
}
    100%{
       width:0%;
}
  
} 
 @keyframes animate-css{
    0% {
        width:0%;
}
    50% {
        width:100%;
}
    100%{
       width:0%;
}
  
} 
 
.html:before{
    animation-duration:4s ;
}
.css:before{
    animation-duration:3s ;
    animation-delay: 4s;
}
.js:before{
    animation-duration:2s ;
    animation-delay: 7s;
}
.scss:before{
    animation-duration:4s ;
    animation-delay: 9s;
}
.react:before{
    animation-duration:5s ;
    animation-delay: 11s;
}