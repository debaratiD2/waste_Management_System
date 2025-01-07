using Microsoft.EntityFrameworkCore;

namespace crudUsingReact.Models
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options):base(options) 
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<AuthUser> AuthUsers { get; set; }
    }
}
