
export default function Header() {
    return (
        <header style={{padding:'1rem 2rem'}}>
        <h1 id="title" style={{color:'tomato', fontSize:'4rem'}}>Satre's List</h1>
        <h2 style={{fontSize:'2.5rem'}}>Better-Dressed People</h2>
        <nav aria-label="Main Navigation" role="navigation">
          <ul style={{padding: 0, listStyleType: 'none', display:'flex', justifyContent: 'space-between', textDecoration: 'underline'}}>
            <li><a style={{color:'gray'}} href="...">Women's</a></li>
            <li><a style={{color:'gray'}} href="...">Men's</a></li>
            <li><a style={{color:'gray'}} href="...">On the Street</a></li>
            <li><a style={{color:'gray'}} href="...">The Catwalk</a></li>
            <li><a style={{color:'gray'}} href="...">AdWatch</a></li>
            <li><a style={{color:'gray'}} href="...">About</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  