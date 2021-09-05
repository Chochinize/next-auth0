import { people } from '../../../data'

export default function personHandler({ query: { id,name },method}, res) {
  
  const filtered = people.find(p => p.height === 172)
    if(method === 'GET'){
      res.status(200).json(filtered)
    }

  // User with id exists
    
  if (filtered.length > 0) {
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
// export default function handler(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
//   // res.status(200).json(people)
// }
