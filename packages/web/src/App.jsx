import _ from "lodash";

function App() {
  async function handleDownload() {
    try {
      const res = await fetch("http://localhost:8000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: "avatar.jpg",
        }),
      });

      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.style.display = "none";
      a.href = url;
      a.download = `avatar-${_.now()}.jpg`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center gap-8">
      <div className="mt-8 text-2xl font-semibold text-slate-800">
        Click the following button for downloading my favourite avatar 😊
      </div>
      <button
        className="rounded-sm bg-slate-300 px-2 py-1 text-slate-700 hover:bg-slate-200 active:bg-slate-300"
        type="button"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
}

export default App;
