import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <div style={{ display: "flex", justifyContent: "center", }}>
                <Image
                priority
                src="/images/IMG_1832.jpeg"
                className={utilStyles.borderCircle}
                height={300}
                width={250}
                alt="Picture of the author"
                />
            </div>
            <section className={utilStyles.headingMd}>
                <p>👋Hi!  I'm Cole Summers, a UX designer and frontend developer looking for remote or hybrid work in an inclusive environment.</p>
                <p>When I'm not behind a computer you can find me with my nose in a book or dancing the night away.</p>
                <p>If you need a delightful user experience or website built, slide into my DMs using one of the links below, or <a href = "mailto:nsummers72@gmail.com?subject = Design Request">email</a> me. </p>
            </section>
        </Layout>
    )
}
