// (Tela de Informações do Aplicativo - Exibe informações sobre o app e desenvolvedores usando ScreenContainer)
import React from 'react';
import { Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native'; // Removido ScrollView
import ScreenContainer from '../components/ScreenContainer'; // Importa o ScreenContainer

// Componente principal da tela de Informações do App
const InfoAppScreen = ({ navigation }) => {
  // Dados fictícios para demonstração - devem ser ajustados pelo usuário
  const appVersion = '1.0.1-refactored'; // Versão atualizada após refatoração
  const developers = ['Felipe Guindani', 'Leonardo Osvald', 'Karoline Soares']; // Ajustar com os nomes reais
  const contactEmail = 'suporte@eletronicsstore.app';
  const projectDescription = 'Este é um aplicativo de compras online desenvolvido como parte da atividade avaliativa G2 da disciplina Tópicos Especiais em Computação. Ele permite o cadastro e login de usuários, e o gerenciamento de um catálogo de produtos (CRUD completo), seguindo boas práticas de componentização e organização de projeto.';

  // Função para abrir link de e-mail
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contactEmail}?subject=Contato App eletronicsstore`);
  };

  return (
    // Utiliza ScreenContainer com rolagem para o conteúdo da tela
    <ScreenContainer scrollable={true}>
      {/* Título da tela */}
      <Text style={styles.title}>Sobre o Eletronics Store</Text>

      {/* Seção de Versão do App */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Versão do Aplicativo</Text>
        <Text style={styles.sectionContent}>{appVersion}</Text>
      </View>

      {/* Seção de Desenvolvedores */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Desenvolvedores</Text>
        {developers.map((dev, index) => (
          <Text key={index} style={styles.sectionContent}>- {dev}</Text>
        ))}
      </View>

      {/* Seção de Contato */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={[styles.sectionContent, styles.link]}>{contactEmail}</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Descrição do Projeto */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descrição do Projeto</Text>
        <Text style={styles.sectionContent}>{projectDescription}</Text>
      </View>

    </ScreenContainer>
  );
};

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  // ScreenContainer já define o flex:1 e backgroundColor padrão
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#343a40',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#495057',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#6c757d',
    lineHeight: 24,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

// Exporta o componente para ser usado na navegação
export default InfoAppScreen;
