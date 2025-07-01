import styles from './Ejercicio2.3.module.css';

function AuthorBadge({ name }: { name: string }) {
    return <span className={styles.authorBadge}> {name}</span>;
}

function AuthorInfo({ name }: { name: string }) {
    return (
        <span className={styles.authorInfo}>
            <AuthorBadge name={name} />
        </span>
    );
}

function Comment({ text, author }: { text: string; author: string }) {
    return (
        <div className={styles.comment}>
            <p className={styles.commentText}>{text}</p>
            <span className={styles.commentAuthor}>
                <AuthorInfo name={author} />
            </span>
        </div>
    );
}

function CommentSection({ comments }: { comments: { text: string; author: string }[] }) {
    return (
        <div>
            <h4 className={styles.commentsTitle}>Comentarios</h4>
            {comments.map((c, i) => (
                <Comment key={i} text={c.text} author={c.author} />
            ))}
        </div>
    );
}

function PostFooter({ comments }: { comments: { text: string; author: string }[] }) {
    return (
        <footer className={styles.postFooter}>
            <CommentSection comments={comments} />
        </footer>
    );
}

function PostContent({ content }: { content: string }) {
    return <div className={styles.postContent}>{content}</div>;
}

function PostHeader({ title, author }: { title: string; author: string }) {
    return (
        <header className={styles.postHeader}>
            <h2 className={styles.postTitle}>{title}</h2>
            <AuthorInfo name={author} />
        </header>
    );
}

function BlogPost({
    title,
    author,
    content,
    comments,
}: {
    title: string;
    author: string;
    content: string;
    comments: { text: string; author: string }[];
}) {
    return (
        <article className={styles.post}>
            <PostHeader title={title} author={author} />
            <PostContent content={content} />
            <PostFooter comments={comments} />
        </article>
    );
}

function Blog() {
    const posts = [
        {
            title: "Primer Post",
            author: "Ana",
            content: "Este es el contenido del primer post.",
            comments: [
                { text: "¡Buen post!", author: "Luis" },
                { text: "Gracias por compartir.", author: "Marta" },
            ],
        },
        {
            title: "Segundo Post",
            author: "Carlos",
            content: "Contenido del segundo post.",
            comments: [{ text: "Interesante.", author: "Ana" }],
        },
    ];

    return (
        <section className={styles.blogContainer}>
            <h1 className={styles.blogTitle}> Blog</h1>
            {posts.map((p, i) => (
                <BlogPost key={i} {...p} />
            ))}
        </section>
    );
}

export default function SistemadeComponentesAnidados() {
    return <Blog />;
}
