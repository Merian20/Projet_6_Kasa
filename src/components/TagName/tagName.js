import './tagname.scss'

function TagName({ tags }) {
    console.log('tags :', tags);
    return tags.map((tag, index) => {
        return (
            <div key={index}>
                <span className="bloc-tag">
                    <h3>{tag}</h3>
                </span>
            </div>
        );
    });
};

export default TagName;