@import url("base.css");

#navbar-section{
    height: 60px;

    & .container{
        height: 100%;
        justify-content: space-between;
    }

    & .nav-links{
        height: 100%;
        gap: 30px;
    }
    
    & .nav-items{
        position: relative;
        opacity: 0.9;
        transition: all 0.2s ease;
    }

    & .nav-items:hover{
        opacity: 1;
    }

    & .nav-items a{
        position: relative;
        /* display: flex; */
    }

    & .nav-items a::after{
        content: "";
        position: absolute;
        width: 0;
        height: 1px;
        background-color: rgb(var(--goldClr));
        display: block;
        transition: all 0.3s ease;
    }

    & .nav-items:hover a::after{
        width: 100%;
    }

    &.nav-items a{
        font-weight: 600;
    }

    & .nav-items:first-child a{
        color: rgb(var(--goldClr));
        font-weight: 700;
    }

    & .sub-nav-links{
        display: none;
        position: absolute;
        top: 20px;
        left: 0;
        width: 200px;
        padding-block-start: 30px;
        background-color: transparent;
    }

    & .nav-items:hover .sub-nav-links{
        display: block;
    }

    & .sub-nav-links li{
        padding: 10px 20px;
        border-bottom: 1px solid rgba(var(--goldClr), 1);
        background-color: rgb(29, 29, 29, 0.2);
        opacity: 0.8;
        transition: all 0.2s ease;
    }

    & .sub-nav-links li:hover{
        opacity: 1;
    }

    & .google-icons{
        color: rgb(var(--goldClr)) !important;
        transition: transform 0.5s ease;
    }

    & .nav-items:hover span.material-symbols-outlined.google-icons{
        transform: rotateX(180deg);
    }

    & input[type="checkbox"]{
        position: absolute;
        display: none;
    }

    & input[type="checkbox"]{
        position: absolute;
        display: none;
    }

    & .dropdown-button{
        display: none;
    }
}




