export const profileTemplate = `
main
  .profile-info !{modal} 
    .profile-info__container
        .profile-info__head
            | !{image}
            p.profile-info-name.big !{display_name}
        .profile-info__fields-container
          .profile-info__field
            p.profile-info__field-name Почта
            p.profile-info__field-value !{email}
          .profile-info__field
            p.profile-info__field-name Логин
            p.profile-info__field-value !{login}
          .profile-info__field
            p.profile-info__field-name Имя
            p.profile-info__field-value !{first_name}
          .profile-info__field
            p.profile-info__field-name Фамилия
            p.profile-info__field-value !{second_name}
          .profile-info__field
            p.profile-info__field-name Имя в чате
            p.profile-info__field-value !{display_name}
          .profile-info__field
            p.profile-info__field-name Телефон
            p.profile-info__field-value !{phone}
        .profile-info__fields-container 
            .profile-info__field !{buttonEditInfo}
            .profile-info__field !{buttonEditPass}
            .profile-info__field !{buttonLogout}
                a.profile-info__field-name.profile-info__logout(href='/') 

  .profile-navigate
    a.profile-navigate__link !{linkToProfile}
  | !{modalEditProfile}
  | !{modalEditPass}
  | !{modalAddPhoto}
`