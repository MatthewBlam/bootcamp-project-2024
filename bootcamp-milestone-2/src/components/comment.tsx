import { IComment } from "@/database/blogSchema";

function Comment({ comment }: { comment: IComment }) {
    return (
        <div className="bg-slate-50 border-2 border-slate-200 rounded-md py-4 pl-5 pr-6">
            <div className="flex gap-4 items-center">
                <h4 className="text-sm font-medium">{comment.user}</h4>
                <span className="text-xs font-normal text-slate-400 float-right ml-auto">
                    {new Date(comment.time).toLocaleDateString()}
                </span>
            </div>
            <p className="text-sm mt-2">{comment.comment}</p>
        </div>
    );
}

export default Comment;
