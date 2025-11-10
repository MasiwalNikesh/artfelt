# Deploy Admin to Vercel - Step by Step

## 🚨 Current Status

✅ Code pushed to GitHub: `claude/custom-cms-database-pages-011CUypMVVwqqwaywgVH8wXP`
❌ Admin NOT functional on Vercel yet (needs database setup)

---

## 🎯 Quick Deploy Guide (15 minutes)

### Step 1: Create Vercel Postgres Database

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your `artfelt` project

2. **Create Database**
   - Click "Storage" tab
   - Click "Create Database"
   - Select "Postgres"
   - Name: `artfelt-cms-db` (or any name)
   - Region: Choose closest to Mumbai (e.g., Mumbai, Singapore, or Bangalore if available)
   - Click "Create"

3. **Get Connection String**
   - After creation, go to database settings
   - Copy the `POSTGRES_PRISMA_URL` value
   - It looks like: `postgres://user:pass@host:5432/db?sslmode=require`

---

### Step 2: Update Your Code

**Update `prisma/schema.prisma`:**

```prisma
datasource db {
  provider = "postgresql"  // Change from "sqlite"
  url      = env("DATABASE_URL")
}
```

**Commit the change:**
```bash
git add prisma/schema.prisma
git commit -m "Switch to PostgreSQL for production"
git push
```

---

### Step 3: Set Environment Variables in Vercel

1. Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

2. Add this variable:
   - **Key:** `DATABASE_URL`
   - **Value:** [Your POSTGRES_PRISMA_URL from Step 1]
   - **Environment:** Production, Preview, Development (check all)
   - Click "Save"

**Note:** Vercel may have auto-set this already! Check if it exists first.

---

### Step 4: Deploy

Vercel will **auto-deploy** when you push. If not, trigger manually:

1. Go to: Vercel Dashboard → Deployments
2. Click "Redeploy" on the latest deployment

Or from CLI:
```bash
# Install Vercel CLI (if not already)
npm i -g vercel

# Deploy
vercel --prod
```

---

### Step 5: Seed Production Database

After deployment succeeds:

**Option A: Use Vercel CLI**
```bash
# Connect to your project
vercel env pull .env.production

# Run seed (will use production DATABASE_URL)
DATABASE_URL="[your-vercel-postgres-url]" npm run db:seed
```

**Option B: Manual via Prisma Studio**
1. Connect to Vercel Postgres using connection string
2. Run seed script with production URL
3. Or manually add admin user through Prisma Studio

---

### Step 6: Test Admin

1. Visit: `https://your-vercel-domain.vercel.app/admin/login`
2. Login with:
   - Email: `admin@artfelt.com`
   - Password: `admin123`
3. ⚠️ **Change password immediately!**

---

## ✅ Verification Checklist

After deployment:

- [ ] Can access `/admin/login`
- [ ] Can login with credentials
- [ ] Dashboard loads with stats
- [ ] Can view services list
- [ ] Can edit a service
- [ ] Changes appear on public site
- [ ] Home page loads services
- [ ] Services page displays correctly

---

## 🐛 Troubleshooting

### Issue: "Can't connect to database"

**Solution:**
1. Check `DATABASE_URL` is set in Vercel environment variables
2. Verify you're using `POSTGRES_PRISMA_URL` (not `POSTGRES_URL`)
3. Ensure database is in same region as deployment

### Issue: "Table does not exist"

**Solution:**
```bash
# Run migration on production database
DATABASE_URL="[vercel-postgres-url]" npx prisma migrate deploy
```

### Issue: "Can't login"

**Solution:**
1. Verify database is seeded
2. Check seed script ran successfully
3. Try creating admin manually in Prisma Studio

### Issue: "Build fails on Vercel"

**Solution:**
1. Check Vercel build logs
2. Ensure `DATABASE_URL` is set for all environments
3. Run `npx prisma generate` before build (should be automatic)

---

## 🚀 Alternative: Deploy Without Database First

If you want to deploy WITHOUT the admin working:

1. **Comment out database calls temporarily**
2. **Use static data** (original approach)
3. **Deploy successfully**
4. **Then add database later**

**To do this:**
```typescript
// In src/app/page.tsx and src/app/services/page.tsx
// Comment out database fetch, use static import instead

// Temporary - use static data
import { getAllServices } from "@/lib/data/services"
const services = getAllServices()

// Later - use database
// const services = await getServices()
```

---

## 📊 Expected Timeline

- **Step 1-3:** 5 minutes (create DB, update code, set env vars)
- **Step 4:** 2-5 minutes (Vercel auto-deploy)
- **Step 5:** 2 minutes (seed database)
- **Step 6:** 1 minute (test)

**Total: ~15 minutes** ⚡

---

## 🎯 Production Best Practices

After successful deployment:

### Security
- [ ] Change admin password from default
- [ ] Enable 2FA on Vercel account
- [ ] Review environment variables
- [ ] Set up database backups

### Performance
- [ ] Monitor database usage
- [ ] Check response times
- [ ] Review Vercel analytics

### Maintenance
- [ ] Document custom changes
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Plan content update workflow

---

## 💰 Cost Estimates

**Vercel (Hobby - Free)**
- Deployment: Free
- Bandwidth: 100 GB/month
- Builds: Unlimited

**Vercel Postgres (Free Tier)**
- Storage: 256 MB
- Compute: 60 hours/month
- Good for getting started

**When to Upgrade:**
- Pro Plan ($20/month): More storage, compute, bandwidth
- Typically needed when site traffic grows

---

## 🆘 Need Help?

1. **Check build logs:** Vercel Dashboard → Deployments → [your deployment] → Build Logs
2. **Check function logs:** Deployments → Functions → [function name] → Logs
3. **Test locally first:** Make sure everything works with `npm run dev`
4. **Documentation:** See `VERCEL_POSTGRES_MIGRATION.md` for detailed migration steps

---

## 📞 Quick Commands Reference

```bash
# Build locally (test before deploy)
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Generate Prisma Client
npx prisma generate

# Run migrations
DATABASE_URL="[url]" npx prisma migrate deploy

# Seed database
DATABASE_URL="[url]" npm run db:seed

# Open Prisma Studio with production DB
DATABASE_URL="[url]" npx prisma studio
```

---

## ✅ Success!

Once deployed, your admin will be live at:
`https://your-domain.vercel.app/admin`

You can manage all content from anywhere in the world! 🌍

---

**Last Updated:** 2025-11-10
**Status:** Ready to Deploy
