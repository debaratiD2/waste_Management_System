using System.ComponentModel.DataAnnotations;

namespace crudUsingReact.Models
{
    public class User
    {
        [Key]
        public int User_Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? Password_hashed { get; set; }

        public int Role_id { get; set; }
    }
}
