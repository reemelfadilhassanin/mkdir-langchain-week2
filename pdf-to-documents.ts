// pdf-to-documents.ts
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import path from "path";

async function main() {
  // مسار ملف PDF
  const filePath = path.join(__dirname, "week5.pdf");

  // إنشاء لودر للـ PDF
  const loader = new PDFLoader(filePath);

  // تحميل وتحويل الملف إلى مصفوفة Document[]
  const docs = await loader.load();

  // طباعة النتائج
  console.log("✅ Loaded PDF as Document[]:");
  console.log(docs);
}

main().catch(console.error);
