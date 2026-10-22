# Publish Eira Journal on Vercel

## What is in this folder
This is the Next.js project root. The site includes a homepage with a **Read Our Newsletter** call to action, the online Middle East inaugural issue, a PDF download, six regional desks, an About page, Publications, and the real 26-person masthead.

## First-time deployment, without using a terminal
1. Go to https://github.com/new and create a repository named `eira-journal`. Choose public or private, and preferably leave the repository empty (do not check Initialize with README).
2. On the GitHub repository, choose **uploading an existing file** (or **Add file → Upload files**). Unzip this archive. Drag **the contents inside `eira-journal/`** onto GitHub, keeping the folders (`app`, `components`, `config`, `content`, `public`) and root files. If the GitHub web uploader does not allow folders or rejects the upload, use GitHub Desktop instead.
3. Go to https://vercel.com/new, choose **Import Git Repository**, connect GitHub if prompted, and select `eira-journal`.
4. Confirm **Framework Preset: Next.js** and **Root Directory: `./`** (repository root), then **Deploy**. You don't need to set environment variables for the initial Vercel address: the site automatically uses Vercel's production/deployment URL for metadata.
5. Open the URL Vercel provides and verify `/`, `/masthead`, `/regions`, `/publications`, `/about`, `/newsletter/1`, and the PDF at `/newsletters/eira-journal-newsletter-01-middle-east.pdf`.
6. When you later add a custom domain, set `NEXT_PUBLIC_SITE_URL` to its full `https://` URL in Vercel Project Settings → Environment Variables and redeploy.

## Site notes
- Current content is the corrected Newsletter 1 draft. The two identified errors were fixed; this is not an independent full fact-check.
- Source code does not contain example contact forms or fake publication pages.
- Vercel builds the app from `package-lock.json` using the dependencies in `package.json`.
- For future updates, push new files to the same GitHub repository and Vercel redeploys automatically.
