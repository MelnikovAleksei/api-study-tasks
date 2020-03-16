            
            // grabbing a reference

            const link = document.querySelector('a');
            const section = document.querySelector('section');
            const linkParagraph = document.querySelector('p');

            // create elements

            const paragraph = document.createElement('p');
            const text = document.createTextNode(' — the premier source for web development knowledge.');
            
            // update property

            paragraph.textContent = 'We hope you enjoyed the ride.';
            link.textContent = 'Mozilla Developer Network';
            link.href = 'https://developer.mozilla.org';
            

            // append elements

            section.appendChild(paragraph);
            linkParagraph.appendChild(text);
            section.appendChild(linkParagraph);
        
            // manipulating styles

            paragraph.setAttribute('class', 'highlight');

            //                  or
            /*
            paragraph.style.color = 'white';
            paragraph.style.backgroundColor = 'black';
            paragraph.style.padding = '10px';
            paragraph.style.width = '250px';
            paragraph.style.textAlign = 'center';
            */