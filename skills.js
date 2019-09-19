let about_me=document.getElementById("aboutMe");
let project_menu=document.getElementById("projects");
let skills_menu=document.getElementById("skills");
let education_menu=document.getElementById("education");
let resume_menu=document.getElementById("resume");
let youtube_menu=document.getElementById("youtube");
let contact_menu=document.getElementById("contactMe");
let home_menu=document.getElementById("home");

// let github_skill=document.getElementById("github");
// let python_skill=document.getElementById('python');
// let css_skill=document.getElementById('css');
// let ubuntu_skill=document.getElementById('ubuntu');
// let html_skill=document.getElementById('html');
// let js_skill=document.getElementById('javascript');
// let node_skill=document.getElementById('node');
// let react_skill=document.getElementById('react');
// let sql_skill=document.getElementById('sql');
// let java_skill=document.getElementById('java');


about_me.addEventListener('mouseenter',function ()
{
    about_me.height=100;
    about_me.width=100;
});
about_me.addEventListener('mouseleave',function()
{
    about_me.height=50 ;
    about_me.width=50;
});
project_menu.addEventListener('mouseenter',function()
{
    project_menu.height=100;
    project_menu.width=100;
});
project_menu.addEventListener('mouseleave',function ()
{
    project_menu.height=50;
    project_menu.width=50;
});
skills_menu.addEventListener('mouseenter',function(){
    skills_menu.height=100;
    skills_menu.width=100;
});
skills_menu.addEventListener('mouseleave',function ()
{
    skills_menu.height=50;
    skills_menu.width=50;
});
education_menu.addEventListener('mouseenter',function ()
{
    education_menu.height=100;
    education_menu.width=100;
});
education_menu.addEventListener('mouseleave',function ()
{
    education_menu.height=50;
    education_menu.width=50;
});
resume_menu.addEventListener('mouseenter',function ()
{
    resume_menu.height=100;
    resume_menu.width=100;
});
resume_menu.addEventListener('mouseleave',function ()
{
    resume_menu.height=50;
    resume_menu.width=50;
});
youtube_menu.addEventListener('mouseenter',function ()
{
    youtube_menu.height=100;
    youtube_menu.width=100;
});
youtube_menu.addEventListener('mouseleave',function()
{
    youtube_menu.height=50;
    youtube_menu.width=50;
});
contact_menu.addEventListener('mouseenter',function ()
{
    contact_menu.height=100;
    contact_menu.width=100;
});
contact_menu.addEventListener('mouseleave',function ()
{
    contact_menu.height=50;
    contact_menu.width=50;
});
home_menu.addEventListener('mouseenter',function ()
{
    home_menu.height=100;
    home_menu.width=100;
});
home_menu.addEventListener('mouseleave',function ()
{
    home_menu.height=45;
    home_menu.width=45;
});

// github_skill.addEventListener('click',function ()
// {
//     github_skill.hidden;
//    console.log(github_skill.innerHTML="Github")
//
// });