import React from "react";

type Props = {
  id: string;
};

function Video({ id }: Props) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`http://youtube.com/embed/${id}`}
        title="Youtube video player"
        allow="accelerometner; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}

export default Video;
