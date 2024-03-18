import './tagname.scss'

function TagName({ tags }) {
    console.log('tags :', tags);
    return tags.map(tag => {
        return (
            <div>
                <span className="bloc-tag">
                    <h3>{tag}</h3>
                </span>
            </div>
        );
    });
};

export default TagName;