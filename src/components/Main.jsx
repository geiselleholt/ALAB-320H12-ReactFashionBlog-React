import image from "../images/image.png";
import image2 from "../images/image.png";

export default function Main() {

  return (
    <main style={{padding:'1rem 2rem'}}>
      <section>
        <article style = {{marginBottom: '4rem', borderBottom: '1px solid gray', paddingBottom: '2rem'}}>
          <time style={{fontSize:'2.5rem', color:'lightgray'}} dateTime="2015-08-07">11/12/20</time>
          <h2 style={{fontSize:'3rem'}}>On the Street in Brooklyn</h2>
          <img src={image} width='100%' alt="Girl in orange dress" />
          <p style={{fontSize:'1.5rem'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque
            porro, voluptatem veritatis consequuntur laborum nihil excepturi
            suscipit adipisci harum hic quae maiores voluptate facere ab minus
            doloribus magnam atque!
          </p>
          <aside>
            <h4 style={{color:'tomato', fontWeight:'bold', textAlign:'right', fontSize:'1.5rem'}}>Continues...</h4>
          </aside>
        </article>
      </section>

      <section>
        <article style = {{marginBottom: '4rem', borderBottom: '1px solid gray', paddingBottom: '2rem'}}>
          <time style={{fontSize:'2.5rem', color:'lightgray'}} dateTime="2015-08-07">11/11/20</time>
          <h2 style={{fontSize:'3rem'}}>Vintage in Vogue</h2>
          <img src={image2} width='100%' alt="Fancy young people" />
          <p style={{fontSize:'1.5rem'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quo magni magnam facere distinctio aliquam voluptatum assumenda eos
            nostrum. Neque ab ducimus facilis eos ipsam quod nemo possimus!
            Esse, ex?
          </p>
          <aside>
            <h4 style={{color:'tomato', fontWeight:'bold', textAlign:'right', fontSize:'1.5rem'}}>Continues ...</h4>
          </aside>
        </article>
      </section>
    </main>
  );
}
