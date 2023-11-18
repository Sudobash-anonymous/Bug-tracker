const addbutton = document.getElementById("addbutton");

addbutton.addEventListener("click" ,()=>{
    const description = document.getElementById("description").value;
    const severity = document.getElementById("severity").value;
    const assign = document.getElementById("assign").value;

    const issue = document.createElement("div");
    const sign = document.createElement("p");
    const issuename = document.createElement("p");
    const issueseverity = document.createElement("p");
    const issueassign = document.createElement("p");
    const close = document.createElement("button");
    const deleted = document.createElement("button");

    issue.setAttribute("id","issue");
    sign.setAttribute("id","sign");
    issuename.setAttribute("id","issuename");
    issueseverity.setAttribute("id","issueseverity");
    issueassign.setAttribute("id","issueassign");
    close.setAttribute("id","close");
    deleted.setAttribute("id","delete");

    sign.innerHTML="Open";
    issuename.innerHTML=description;
    issueseverity.innerHTML=severity;
    issueassign.innerHTML=assign;
    close.innerHTML="Close";
    deleted.innerHTML="Delete";
    
    close.addEventListener("click",()=>{
        issuename.style.textDecoration = "line-through";
        sign.innerHTML = "Closed";
    });
    deleted.addEventListener("click",()=>{
        issue.remove();
    });

    document.getElementById("rightContainer").appendChild(issue);
    issue.appendChild(sign);
    issue.appendChild(issuename);
    issue.appendChild(issueseverity);
    issue.appendChild(issueassign);
    issue.appendChild(close);
    issue.appendChild(deleted);
    
});