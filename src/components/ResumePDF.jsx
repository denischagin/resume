import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
  Image,
  Font,
} from '@react-pdf/renderer'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/',
})

Font.register({
  family: 'Roboto',
  fonts: [
    // Regular (400)
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 400,
    },
    // Bold (700)
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 700,
    },
    // Italic (400)
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-italic-webfont.ttf',
      fontWeight: 400,
      fontStyle: 'italic',
    },
    // Bold Italic (700)
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bolditalic-webfont.ttf',
      fontWeight: 700,
      fontStyle: 'italic',
    },
  ],
})

Font.register({
  family: 'NotoColorEmoji',
  src: 'https://cdn.jsdelivr.net/gh/googlefonts/noto-emoji@main/fonts/NotoColorEmoji.ttf',
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Roboto',
    flexDirection: 'row',
  },
  leftColumn: {
    width: '70%',
    paddingRight: 20,
    gap: 5,
  },
  rightColumn: {
    width: '30%',
  },
  header: {
    marginBottom: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 14,
    color: '#3498db',
  },
  section: {},
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    borderBottom: '1px solid #f5f5f5',
    borderLeft: '4px solid #3498db',
    paddingLeft: 5,
    paddingBottom: 2,
  },
  sectionIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#3498db',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    textDecoration: 'none',
  },
  contactText: {
    fontSize: 10,
    color: '#2c3e50',
    textDecoration: 'underline',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    border: '3px solid #3498db',
    marginBottom: 20,
  },
  skillsCategory: {
    marginBottom: 15,
  },
  skillsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  skillsItem: {
    fontSize: 10,
    marginBottom: 3,
  },
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#1f5a82',
  },
  projectTech: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 10,
  },
  experienceItem: {
    marginTop: 5,
  },
  experiencePosition: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  experienceCompany: {
    fontSize: 10,
    marginBottom: 3,
    color: '#000000',
  },
  experiencePeriod: {
    fontSize: 10,
    color: '#666',
    marginBottom: 5,
  },
  experienceDuty: {
    fontSize: 10,
    marginBottom: 3,
  },
  educationItem: {
    marginTop: 5,
  },
  educationDegree: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  educationUniversity: {
    fontSize: 10,
    marginBottom: 3,
  },
  educationPeriod: {
    fontSize: 10,
    color: '#666',
  },
})

const ResumePDF = ({ data }) => (
  <Document>
    <Page
      size="A4"
      style={styles.page}
    >
      <View style={styles.leftColumn}>
        {/* Заголовок */}
        <View style={styles.header}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.subtitle}>{data.position}</Text>
        </View>

        {/* О себе */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>О себе</Text>
          </View>
          <Text style={{ fontSize: 10, textIndent: 15 }}>{data.about}</Text>
        </View>

        {/* Образование */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Образование</Text>
          </View>
          {data.education.map((edu, index) => (
            <View
              key={index}
              style={styles.educationItem}
            >
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationUniversity}>{edu.university}</Text>
              <Text style={styles.educationPeriod}>{edu.period}</Text>
            </View>
          ))}
        </View>

        {/* Опыт работы */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Опыт работы</Text>
          </View>
          {data.experience.map((exp, index) => (
            <View
              key={index}
              style={styles.experienceItem}
            >
              <Text style={styles.experiencePosition}>{exp.position}</Text>
              <Link
                href={exp.href}
                style={styles.experienceCompany}
              >
                <Text style={styles.experienceCompany}>{exp.company}</Text>
              </Link>
              <Text style={styles.experiencePeriod}>{exp.period}</Text>
              {exp.duties.map((duty, i) => (
                <Text
                  key={i}
                  style={styles.experienceDuty}
                >
                  • {duty}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Проекты */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Проекты</Text>
          </View>
          {data.projects.map((project, index) => (
            <View
              key={index}
              style={styles.projectItem}
            >
              <Link
                href={project.href}
                style={styles.projectTitle}
              >
                <Text style={styles.projectTitle}>{project.title}</Text>
              </Link>
              <Text style={styles.projectTech}>{project.tech}</Text>
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Правая колонка (фото и навыки) */}
      <View style={styles.rightColumn}>
        {/* Фото */}
        {/* <Image
          src={data.photo}
          style={styles.photo}
        /> */}

        {/* Контакты */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Контакты</Text>
          </View>
          {data.contacts.map((contact, index) => (
            <Link
              key={index}
              src={contact.href}
              style={styles.contactItem}
            >
              <Text
                style={{
                  ...styles.contactText,
                  marginRight: 5,
                  fontStyle: 'italic',
                  textDecoration: 'none',
                }}
              >
                {contact.name}:{' '}
              </Text>
              <Text style={styles.contactText}>{contact.text}</Text>
            </Link>
          ))}
        </View>

        {/* Навыки */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Навыки</Text>
          </View>
          {data.skills.map((skill, index) => (
            <View
              key={index}
              style={styles.skillsCategory}
            >
              <Text style={styles.skillsTitle}>{skill.title}</Text>
              {skill.items.map((item, i) => (
                <Text
                  key={i}
                  style={styles.skillsItem}
                >
                  • {item}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
)

export default ResumePDF
