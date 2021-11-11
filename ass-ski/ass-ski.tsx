import { h } from "hyposcript";

declare module hyposcript {}

type MatrixPatch = {
  row: number;
  col: number;
  val: string;
};
type Matrix = typeof defaultMatrix;

const defaultMatrix = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

function saveStorage({ matrix, frames }) {
  localStorage.setItem(
    "ass_ski",
    JSON.stringify({
      matrix,
      frames,
    })
  );
}

function getStorage(): { matrix: Matrix; frames: Matrix[] } {
  return JSON.parse(
    localStorage.getItem("ass_ski") ||
      `{ "matrix": ${JSON.stringify(defaultMatrix)}, "frames": ${JSON.stringify(
        []
      )} }`
  );
}

function renderMatrix(matrix) {
  document.getElementById("matrix").innerHTML = (
    <div className="matrix f mono fs2">
      {matrix.map((row, rowIndex) => (
        <div className="matrix__row f">
          {row.map((col, colIndex) => (
            <div
              id={`r${rowIndex}c${colIndex}`}
              className="matrix__cell db tac mono"
              contentEditable="true"
            >
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  ) as unknown as string;
}

function renderFrames(frames: Matrix[]) {
  document.getElementById("frames").innerHTML = (
    <div style={{ marginLeft: "-8px", marginRight: "-8px" }}>
      {frames.map((frame) => (
        <div className="p2">
          <div className="frame mono fs6">
            {frame.map((row, rowIndex) => (
              <div className="frame__row f">
                {row.map((col, colIndex) => (
                  <div
                    id={`r${rowIndex}c${colIndex}`}
                    className="frame__cell db tac mono"
                  >
                    {col}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) as unknown as string;
}

/*
 * run
 */

let { matrix, frames } = getStorage();

document.getElementById("root").innerHTML = (
  <div className="p12">
    <h3>Ascii Art Animation Generator</h3>

    <div className="f" id="matrix" />

    <button id="capture">Capture</button>
    <button id="resetFrame">Reset Current Frame</button>
    <button id="resetAll">Reset All</button>

    <div className="f fw" id="frames" />
  </div>
) as unknown as string;

document.getElementById("root").addEventListener("input", (e) => {
  // @ts-ignore
  if (!e.target.classList.contains("matrix__cell")) return;

  const { textContent: value, id } = e.target as HTMLDivElement;
  const val = value.slice(0, 1);
  const [row, col] = id
    .split("c")
    .map((s) => s.replace(/[^\d]/g, ""))
    .map((v) => parseInt(v));

  matrix[row][col] = val;

  renderMatrix(matrix);

  const previouslyFocusedElement = document.getElementById(`r${row}c${col}`);
  if (previouslyFocusedElement) {
    // @ts-ignore
    previouslyFocusedElement.focus();
  }
});

document.getElementById("capture").addEventListener("click", (e) => {
  frames.push(matrix);
  renderMatrix(defaultMatrix);
  matrix = defaultMatrix;
  renderFrames(frames);
});

document.getElementById("resetFrame").addEventListener("click", (e) => {
  renderMatrix(defaultMatrix);
  matrix = defaultMatrix;
});

/*
 * init
 */

renderMatrix(matrix);
renderFrames(frames);
