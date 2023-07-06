import Link from "next/link";
import "./card.css";
interface DataCard {
  id: number;
  title: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
}

type Props = {
  data: DataCard;
};

export const Card = ({ data }: Props) => {
  const isEdit = !data.updatedAt
    .toLocaleString()
    .match(data.createdAt.toLocaleString());
  return (
    <div className="Card">
      <p>Name:{data.title}</p>
      <p>Content:{data.content}</p>
      {isEdit ? (
        <p>Update{data.updatedAt?.toLocaleString()}</p>
      ) : (
        <p>Create{data.createdAt.toLocaleString()}</p>
      )}
      <p className="link-container">
        <Link href={`/projects/${data.id}`} >
          View{" -->"} 
        </Link>
      </p>
    </div>
  );
};
