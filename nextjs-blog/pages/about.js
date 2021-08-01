import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Layout from '../components/layout';

export default function About() {
    return (
        // <div className={utilStyles.center}>
        <Layout>
            <div style={{ display: "flex", justifyContent: "center", }}>

            <Image
               priority
               src="/images/profile.jpg"
               className={utilStyles.borderCircle}
               height={144}
               width={144}
               alt="Picture of the author"
             />
            </div>
            <section className={utilStyles.headingMd}>
                <p>Hi!  I'm Cole Summers, a UX designer and frontend developer.</p>
                <p>When I'm not behind a computer you can find me with my nose in a book or dancing the night away.</p>
                <p>If you need a delightful user experience or website built slide into my DMs using one of the links below, or send me an email. </p>
            </section>
        </Layout>
        // </div>
    )
}