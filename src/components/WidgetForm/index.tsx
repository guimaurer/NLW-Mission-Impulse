import { ClouseButton } from "../ClouseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
  BUG: {
    title: "Ploblema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OUTRO: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    }
  }
}
export type FeedbackType = keyof typeof feedbackTypes;

export function WindgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)


  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <ClouseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
      </footer>
    </div>
  );


}