let pic_flip= ["pictures/wink_edit.png","pictures/basic_smile_edit.png"];
i=0;
let x=document.getElementById("basic_smile");
let about_me=document.getElementById("aboutMe");
let project_menu=document.getElementById("projects");
let skills_menu=document.getElementById("skills");
let education_menu=document.getElementById("education");
let resume_menu=document.getElementById("resume");
let youtube_menu=document.getElementById("youtube");
let contact_menu=document.getElementById("contactMe");
x.addEventListener('mouseover',function ()
{
   // x=pic_flip[1];
   // i++;
   //  console.log(pic_flip.length);
   //  x.src=["pictures/wink_edit.png","pictures/basic_smile.png"];
    x.src=pic_flip[i];
    i++;
    if(i>pic_flip.length)
    {
        i=0;
        x.src=pic_flip[i];
        i++;
    }
});
about_me.addEventListener('mouseenter',function ()
{
    about_me.height=110;
    about_me.width=110;
});
about_me.addEventListener('mouseleave',function()
{
    about_me.height=100 ;
    about_me.width=100;
});
project_menu.addEventListener('mouseenter',function()
{
    project_menu.height=110;
    project_menu.width=110;
});
project_menu.addEventListener('mouseleave',function ()
{
    project_menu.height=90;
    project_menu.width=90;
});
skills_menu.addEventListener('mouseenter',function(){
    skills_menu.height=110;
    skills_menu.width=110;
});
skills_menu.addEventListener('mouseleave',function ()
{
    skills_menu.height=75;
    skills_menu.width=75;
});
education_menu.addEventListener('mouseenter',function ()
{
    education_menu.height=110;
    education_menu.width=110;
});
education_menu.addEventListener('mouseleave',function ()
{
    education_menu.height=75;
    education_menu.width=75;
});
resume_menu.addEventListener('mouseenter',function ()
{
    resume_menu.height=110;
    resume_menu.width=110;
});
resume_menu.addEventListener('mouseleave',function ()
{
    resume_menu.height=75;
    resume_menu.width=75;
});
youtube_menu.addEventListener('mouseenter',function ()
{
    youtube_menu.height=110;
    youtube_menu.width=110;
});
youtube_menu.addEventListener('mouseleave',function()
{
    youtube_menu.height=90;
    youtube_menu.width=105;
});
contact_menu.addEventListener('mouseenter',function ()
{
    contact_menu.height=110;
    contact_menu.width=110;
});
contact_menu.addEventListener('mouseleave',function ()
{
    contact_menu.height=80;
    contact_menu.width=80;
});
homechange= document.getElementById("aboutContainer");

