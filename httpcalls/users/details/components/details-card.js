// export function DetailsCard(user) {
//   const {
//     name,
//     email,
//     phone,
//     company: { name: companyName },
//   } = user;
//   return `
//     <h1>${name}</h1>
//     <h2><a href="mailto:${email}">${email}</a></h2>
//     <p><b>Company : </b>${companyName}</p>
//     <p>Phone : <a href="tel:${phone}">${phone}</a></p>
// `;
// }

export function DetailsCard(data) {
  const {
    id,
    name,
    username,
    email,
    phone,
    company: { name: companyName, catchPhrase },
  } = data;
  return `
 <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://robohash.org/${id}" alt="Placeholder image">
      </figure>
    </div>
    
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://robohash.org/${id}" alt="Placeholder image">
          </figure>
        </div>
        
        <div class="media-content">
          <p class="title is-4">${name}</p>
          <p class="subtitle is-6">${username}</p>  
        </div>
      </div>
    
      <div class="content">
        <p><a href="mailto:${email}">${email}</a></p>
        <p><a href="tel:${phone}">${phone}</a></p>
        <p><b>${companyName}</b></p>
        <blockquote><i>"${catchPhrase}"</i></blockquote>
      </div>
    </div>
  </div>
`;
}
