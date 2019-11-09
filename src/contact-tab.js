const createContact = () => {
    const container = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    const contactHeader = document.createElement('h2');
    const formParagraph = document.createElement('p');
    const contactParagraph = document.createElement('p');

    const formHeader = document.createElement('h3');
    const contactForm = document.createElement('form');
    const formName = document.createElement('input');

    formName.setAttribute('type', 'text');
    formName.setAttribute('placeholder', 'Name');

    const formQuestion = document.createElement('textarea');

    formQuestion.setAttribute('rows', '8');
    formQuestion.setAttribute('placeholder', 'Your Question Goes Here.');
    
    const formButton = document.createElement('button');
    
    formButton.textContent = 'Submit Question';

    contactHeader.textContent = 'CONTACT INFORMATION'; 
    contactParagraph.textContent = 'To get in touch, please call (555) 867-5309, or email us at fakeemail@fake.com';
    formParagraph.textContent = 'Don\'t feel like leaving the page? You can also contact us by using the form below...';
    formHeader.textContent = '"The Form Below"';

    container.appendChild(contactDiv);

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactParagraph);
    contactDiv.appendChild(formParagraph);
    contactDiv.appendChild(formHeader);

    contactDiv.appendChild(contactForm);

    contactForm.appendChild(formName);
    contactForm.appendChild(formQuestion);
    contactForm.appendChild(formButton);
};

export { createContact };