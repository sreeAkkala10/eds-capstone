async function getQueryIndexJson(jsonUrl,val) {
    let pathName=null;
    if(val){
        pathName=jsonUrl;
    }
    else{
	pathName=new URL(jsonUrl);
}
    const res=await fetch(pathName);
    const json= await res.json();
    return json.data;
}
function getTitle(page){
    return page.title;
}

export default async function decorate(block) {
    const breadcrumbs=document.createElement('nav');
    breadcrumbs.classList.add('breadcrumbs');
    const allArticles=block.querySelector('a[href$=".json"]');
    const artcilesJSON= await getQueryIndexJson(allArticles.href,null);
    block.innerHTML = '';
    const ol=document.createElement('ol');
    const allItems=[];
    json.forEach(page=>{
        if(page.path.startsWith('/magazine/')&&page.path!='/magazine/'){
            const li=document.createElement('li');
            if(page.path==window.location.pathname){
                li.classList.add('active');
                li.setAttribute('aria-current', 'page');
            }
            if(page.path&&page.path!=window.location.pathname){
                const a=document.createElement('a');
                a.href="https://main--eds-capstone--sreeakkala10.aem.live"+page.path;
                a.textContent = getTitle(article);
                li.append(a);
            }
            else{
                li.textContent=getTitle(page);
            }
            allItems.push(li);
        }
    })
    allItems.forEach(item=>{
        ol.append(item);
    })

breadcrumbs.append(ol);
  block.append(breadcrumbs);
}