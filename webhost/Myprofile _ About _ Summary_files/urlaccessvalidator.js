const urlsToVerify = [{
    domain: 'https://cdn.kekastatic.net',
    url: 'https://cdn.kekastatic.net/test/index.html'
  }];

let blockedUrls = [];


async function verifyUrls() {
    try{
        for await (let urlDomain of urlsToVerify) {
            try{
                const response = await fetch(urlDomain.url);
                }
            catch (ex){
                blockedUrls.push(urlDomain.domain);
            }
        }
        return blockedUrls;
    }
    catch(e) {
        console.log(e);
    }
}

function buildWarningMessages(warningSectionId) {
    
    const style = document.createElement('style');
    style.innerHTML = `
        .note {
            background-color: yellow;
            color:red;
        }
        `;
    
        //passing the warning message checklist id through params.
    var list = document.getElementById(warningSectionId);
    var ul = document.createElement('ul');

    for (let url of blockedUrls) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode('This url, '));
        var p = document.createElement('span');
        p.style['color'] = 'red';
        p.appendChild(document.createTextNode(url));
        li.appendChild(p);
        li.appendChild(document.createTextNode(', may be blocked by your network administrator. Please request them to whitelist it so that you can access keka application without any issues.'));
        ul.appendChild(li);
    }
    list.appendChild(ul);
}


async function validateUrlAccess(warningSectionId) {
    await verifyUrls();
    buildWarningMessages(warningSectionId);
    return blockedUrls.length > 0;
}

const xhrInterceptor = () => {
    XMLHttpRequest.prototype.send = function(data) {
    };
}

var anyUrlBlocked = validateUrlAccess('urlWhitelistWarning');
anyUrlBlocked.then(
    function (value) {
        if (blockedUrls.length > 0) {
            xhrInterceptor();
            document.querySelector('xhr-app-root').classList.add('hide');
            document.getElementById('warningBox').style.display = 'block';
        }
    },
    function (error) {
        console.log(error);
    }
);
