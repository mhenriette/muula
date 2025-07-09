import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Drawer({showDrawer, setShowDrawer, data, handleShare, handleStartAgain}: {showDrawer: boolean, setShowDrawer: (show: boolean) => void, data: string, handleShare: () => void, handleStartAgain: () => void}) {  
    return (
        <>
        {showDrawer && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-primary">Career Advice</h2>
                    <button
                      onClick={() => setShowDrawer(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="prose max-w-none mb-6">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                       {data}
                    </ReactMarkdown>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleShare}
                      className="flex-1 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80"
                    >
                      Share
                    </button>
                    <button
                      onClick={handleStartAgain}
                      className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80"
                    >
                      Start Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          </>
    )
}