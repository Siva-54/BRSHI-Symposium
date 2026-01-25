import { Award } from "lucide-react";
import { useState } from "react";

function Image({ src, size = 40 }) {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {!imgError ? (
        <img
          src={src}
          alt="Org Committe"
          style={{ width: size, height: size }}
          className="rounded-xl object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <Award
          style={{ width: size, height: size }}
          className="text-accent"
        />
      )}
    </>
  );
}

export default Image;
