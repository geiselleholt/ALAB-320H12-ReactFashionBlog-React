import image from "../images/image.png";
import image2 from "../images/image.png";

export default function Main() {
  return (
    <main>
      <section>
        <article>
          <time dateTime="2015-08-07">11/12/20</time>
          <h2>On the Street in Brooklyn</h2>
          <img src={image} alt="Girl in orange dress" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque
            porro, voluptatem veritatis consequuntur laborum nihil excepturi
            suscipit adipisci harum hic quae maiores voluptate facere ab minus
            doloribus magnam atque!
          </p>
          <aside>
            <h4>Continues...</h4>
          </aside>
        </article>
      </section>

      <section>
        <article>
          <time dateTime="2015-08-07">11/11/20</time>
          <h2>Vintage in Vogue</h2>
          <img src={image2} alt="Fancy young people" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quo magni magnam facere distinctio aliquam voluptatum assumenda eos
            nostrum. Neque ab ducimus facilis eos ipsam quod nemo possimus!
            Esse, ex?
          </p>
          <aside>
            <h4>Continues ...</h4>
          </aside>
        </article>
      </section>
    </main>
  );
}
