# Vercel Postgres Migration Guide

This guide will help you migrate from the local SQLite database to Vercel Postgres when you're ready to deploy to production.

## 📋 Prerequisites

- Vercel account (free tier works)
- Your Artfelt Therapy project connected to Vercel
- Local database with existing data

## 🚀 Step 1: Create Vercel Postgres Database

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your Artfelt Therapy project
3. Click on the "Storage" tab
4. Click "Create Database"
5. Select "Postgres"
6. Choose a database name (e.g., `artfelt-db`)
7. Select your preferred region (choose closest to your users)
8. Click "Create"

## 🔑 Step 2: Get Database Connection String

After creating the database:

1. Click on your newly created database
2. Go to the ".env.local" tab
3. Copy the `POSTGRES_PRISMA_URL` value
4. It will look like: `postgres://user:password@host:5432/database?sslmode=require`

## 📝 Step 3: Update Prisma Schema

Update your `prisma/schema.prisma` file:

```prisma
// Change the datasource from:
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// To:
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## 🔧 Step 4: Update Environment Variables

### For Local Development:

Create/update `.env.local`:

```env
# Vercel Postgres URL
DATABASE_URL="your-postgres-prisma-url-here"
```

### For Production (Vercel):

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `DATABASE_URL` with your Postgres connection string
4. Select "Production", "Preview", and "Development" environments
5. Click "Save"

**Note:** Vercel automatically injects Postgres environment variables, so this may already be set!

## 📦 Step 5: Run Migration

Run the following commands in your terminal:

```bash
# Generate new Prisma Client for PostgreSQL
npx prisma generate

# Push schema to Vercel Postgres
npx prisma db push

# OR create a migration (recommended for production)
npx prisma migrate deploy
```

## 🌱 Step 6: Seed the Database

Seed your production database with initial data:

```bash
npm run db:seed
```

This will create:
- Admin user (email: admin@artfelt.com, password: admin123)
- 4 therapy services
- 2 home content sections
- 5 site settings

**⚠️ IMPORTANT:** Change the admin password immediately after first login!

## ✅ Step 7: Deploy to Vercel

```bash
# Commit your changes
git add .
git commit -m "Migrate to Vercel Postgres"

# Push to your branch
git push origin your-branch-name
```

Vercel will automatically deploy your changes.

## 🧪 Step 8: Test Your Deployment

1. Visit your production URL
2. Go to `/admin/login`
3. Login with: admin@artfelt.com / admin123
4. Verify services are displayed correctly
5. Try editing a service
6. Check the public website to see changes

## 🔄 Switching Between SQLite and PostgreSQL

### Keep Both Databases (Recommended During Transition)

Create two `.env` files:

**`.env.local` (for Vercel Postgres):**
```env
DATABASE_URL="postgres://..."
```

**`.env.sqlite` (for local SQLite):**
```env
DATABASE_URL="file:./dev.db"
```

Then use:
```bash
# Use Postgres
cp .env.local .env

# Use SQLite
cp .env.sqlite .env
```

## 🛠️ Common Migration Issues

### Issue 1: "Type mismatch" errors

**Solution:** PostgreSQL is stricter than SQLite. Ensure all data types match:
- SQLite `TEXT` → PostgreSQL `TEXT` ✅
- SQLite `INTEGER` → PostgreSQL `INTEGER` ✅
- SQLite `DATETIME` → PostgreSQL `TIMESTAMP` ✅

### Issue 2: Case sensitivity

PostgreSQL is case-sensitive for table/column names. Our schema uses:
- Tables: PascalCase (e.g., `Service`, `HomeContent`)
- Columns: camelCase (e.g., `createdAt`, `isActive`)

### Issue 3: Connection pooling

For serverless deployments (Vercel), use connection pooling:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // Optional: for migrations
}
```

## 📊 Data Migration (Existing Data)

If you have important data in SQLite that you need to migrate:

### Option 1: Manual Export/Import

```bash
# Export from SQLite
npx prisma db seed  # Re-seed PostgreSQL

# Or manually backup data
sqlite3 prisma/dev.db ".dump" > backup.sql
```

### Option 2: Use Prisma Migrate

```bash
# Create a migration from existing schema
npx prisma migrate dev --name init

# Apply to PostgreSQL
npx prisma migrate deploy
```

## 🔐 Security Checklist

After migration:

- [ ] Change default admin password
- [ ] Enable HTTPS (Vercel does this automatically)
- [ ] Review environment variables
- [ ] Set up database backups (Vercel handles this)
- [ ] Monitor database usage in Vercel dashboard
- [ ] Consider setting up monitoring/alerts

## 💰 Vercel Postgres Pricing

**Free Tier:**
- 256 MB storage
- 60 hours compute time per month
- Perfect for getting started

**Pro Tier ($20/month):**
- 512 MB storage
- 100 hours compute time
- Recommended for production

## 🆘 Troubleshooting

### Can't connect to database

1. Check your `DATABASE_URL` is correct
2. Ensure you're using `POSTGRES_PRISMA_URL` (not `POSTGRES_URL`)
3. Verify Vercel environment variables are set

### Slow queries

1. Check database location (should be near your serverless functions)
2. Add indexes if needed:
```prisma
model Service {
  // ...
  @@index([slug])
  @@index([isActive, order])
}
```

### Out of connections

Use Prisma connection pooling:
```typescript
// lib/prisma.ts
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})
```

## 📚 Additional Resources

- [Vercel Postgres Docs](https://vercel.com/docs/storage/vercel-postgres)
- [Prisma Postgres Guide](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- [Vercel Deployment Docs](https://vercel.com/docs/deployments/overview)

## 🎉 Success!

Your Artfelt Therapy CMS is now running on Vercel Postgres!

**Next Steps:**
1. Update content via `/admin/dashboard`
2. Share the admin URL with your team
3. Monitor database usage in Vercel dashboard
4. Set up regular backups (automatic with Vercel)

---

**Need Help?**
- Check Vercel Postgres docs
- Review Prisma migration guides
- Contact Vercel support (excellent response times!)
