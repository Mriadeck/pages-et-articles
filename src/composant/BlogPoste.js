import React from 'react';
import ReactMarkdown from 'react-markdown';
const BlogPoste = ({ content }) => {
return (
<div className="prose lg:prose-xl mx-auto">
<ReactMarkdown>{content}</ReactMarkdown>
</div>
);
};

export default BlogPoste;