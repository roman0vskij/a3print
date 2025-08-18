"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebaseClient";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations("Dashboard");

  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState("Выходной");
  const [rangeMode, setRangeMode] = useState(false);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/login");
      else loadItems();
    });
    return () => unsub();
  }, []);

  async function loadItems() {
    const snap = await getDocs(collection(db, "items"));
    setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })).reverse());
  }

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const Date1 = date1.split("-").reverse();
    const Date2 = (date2 && date2.split("-").reverse()) || [];

    const data = rangeMode
      ? {
          from: Date1[0] + "." + Date1[1],
          to: Date2[0] + "." + Date2[1],
          title: newTitle,
        }
      : { from: Date1[0] + "." + Date1[1], to: "", title: newTitle };

    await addDoc(collection(db, "items"), data);
    setNewTitle("Выходной");
    setDate1("");
    setDate2("");
    loadItems();
  }

  async function remove(id: string) {
    await deleteDoc(doc(db, "items", id));
    loadItems();
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={addItem}
        className="mt-10 flex flex-col items-center bg-white rounded-md p-9 custom-shadow w-full max-w-[548px]"
      >
        <label className="flex w-full">
          <input
            name="range"
            type="checkbox"
            checked={rangeMode}
            onChange={(e) => setRangeMode(e.target.checked)}
            className="mb-4 lg:mb-5 mr-5 size-6"
          />
          {t("range")}
        </label>

        {!rangeMode && (
          <input
            name="from"
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
            required
            className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
          />
        )}

        {rangeMode && (
          <div className="flex w-full items-center">
            <input
              name="from"
              type="date"
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
              required
              className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
            />
            <div className="border-b-2 w-10 h-1 mb-4 lg:mb-5 border-black" />
            <input
              name="to"
              type="date"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
              required
              className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
            />
          </div>
        )}

        <input
          name="title"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="mb-4 lg:mb-5 border border-[#e0e0e0] py-2.5 px-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
        />

        <button
          className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
          type="submit"
        >
          {t("button1")}
        </button>
      </form>

      <ul className="min-w-125">
        {items.map((it) => (
          <li key={it.id} className="flex items-center w-full mb-5 gap-5">
            <div className="w-full">
              {it.to ? (
                <div>
                  {it.from} - {it.to}
                </div>
              ) : (
                <div>{it.from}</div>
              )}
            </div>
            <div>{it.title}</div>
            <button
              onClick={() => remove(it.id)}
              className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm rounded-[4px] bg-red-600 h-12 w-full max-w-30 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-white tracking-[-0.01em]"
            >
              {t("button2")}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          signOut(auth);
        }}
        className="hover:drop-shadow-md max-lg:hover:drop-shadow-sm mt-7 rounded-[4px] bg-(--primary-color) h-12 w-full max-w-75 flex justify-center items-center font-montserrat font-semibold text-base leading-[125%] text-(--font-hover-color) tracking-[-0.01em]"
      >
        {t("button3")}
      </button>
    </div>
  );
}
