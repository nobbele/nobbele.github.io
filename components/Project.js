import styles from './Project.module.css';

export default function Project({ project }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {project.thumbnail && <img src={project.thumbnail} className={styles.thumbnail} />}
                <h3 className={styles.title}>
                    {project.title}
                </h3>
            </div>
            <p className={styles.description}>
                {project.description}
            </p>
            <div className={styles.linkList}>
                {project.link && <a target="_blank" href={project.link} className={styles.link}>
                    Open
                </a>}
                {project.links && project.links.map(link => (
                    <a key={link.name} target="_blank" href={link.url} className={styles.link}>
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    )
}